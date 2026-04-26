import glob

for f in glob.glob("src/components/*.tsx"):
    with open(f, 'r') as file:
        content = file.read()
    if '"use client"' not in content:
        with open(f, 'w') as file:
            file.write('"use client";\n' + content)
