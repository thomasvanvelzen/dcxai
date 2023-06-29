import sys
import pytesseract as tess
import difflib as dl
from PIL import Image
import re
import json



def extract_text():
    tess.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    image = Image.open(r"C:\\Users\robin\\Desktop\\II\\dcxai\app\\python\\chart.png")
    imageTextRaw = tess.image_to_string(image).upper()
    imageText = imageTextRaw.split('\n')
    imageText = [x for x in imageText if x != '']
    
    keywords = ["BEARISH", "BULLISH", "ENTRY", "ZONE", "INVALIDATION", "INV", "EXITS"]
    data = {}
    direction = ''
    entry = ''
    invalidation = ''
    exits = []

    for keyword in keywords:
        found = False
        for x in imageText:
            if keyword in x:
                found = True
                if keyword in ["BEARISH", "BULLISH"]:
                    if "BEARISH" in x:
                        direction = "short"
                    elif "BULLISH" in x:
                        direction = "long"
                elif keyword in ["ENTRY", "ZONE"]:
                    entry = re.sub(r'\D', '', x)  # Strip non-numeric characters
                elif keyword in ["INVALIDATION", "INV"]:
                    invalidation = re.sub(r'\D', '', x)  # Strip non-numeric characters
                elif keyword == "EXITS":
                    exit_values = re.findall(r'\d+', x)  # Extract numeric values
                    exits.extend(exit_values)
                imageText.remove(x)
                break
        if not found and keyword in ["BEARISH", "ENTRY", "EXITS"]:
            data[keyword] = ""

    if "BULLISH" in data and data["BULLISH"] == "":
        del data["BULLISH"]

    data["direction"] = direction
    data["entry"] = entry
    data["invalidation"] = invalidation
    data["exits"] = exits

    data = {
    "direction": direction,
    "entry": entry,
    "invalidation": invalidation,
    "exits": exits
    }

    # Convert the dictionary to JSON
    json_data = json.dumps(data)

    # Print the JSON data to the standard output
    prefix = "EXTRACTED_DATA:"
    prefix = "EXTRACTED_DATA:"

    print(f"{prefix} {direction} {entry} {invalidation} {' '.join(exits)}", file=sys.stderr, flush=True);
    return data;

if __name__ == "__main__":
    print(extract_text())


