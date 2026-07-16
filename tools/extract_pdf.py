import sys, subprocess, os

try:
    from pypdf import PdfReader
except Exception:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "pypdf"])
    from pypdf import PdfReader

inpath = r"c:\Scum web\scumandvillany-origins\data\SaV-Release-6x9-Full_Text (2).pdf"
outpath = r"c:\Scum web\scumandvillany-origins\data\SaV-Release-6x9-Full_Text.txt"

reader = PdfReader(inpath)
with open(outpath, "w", encoding="utf-8") as f:
    for page in reader.pages:
        text = page.extract_text() or ""
        f.write(text + "\n\n")

print("EXTRACTION_DONE")
