import shutil
import os

pairs = [
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_hero_1777167951080.png", "public/hero-bg.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_whatwedo_1777167963989.png", "public/what-we-do-bg.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_srv_one_1777167975468.png", "public/service-1.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_srv_two_1777167987849.png", "public/service-2.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_srv_three_1777168000844.png", "public/service-3.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_srv_four_1777168014849.png", "public/service-4.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_why_one_1777168029053.png", "public/why-1.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_why_two_1777168040643.png", "public/why-2.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_why_three_1777168050833.png", "public/why-3.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_why_four_1777168064562.png", "public/why-4.png"),
    ("/home/loki/.gemini/antigravity/brain/001c3e7d-f9ee-4f8e-a240-999a60d8c4bf/new_about_1777168076967.png", "public/about-us.png")
]

for src, dst in pairs:
    try:
        shutil.copy2(src, dst)
        print(f"Copied {os.path.basename(src)} to {dst}")
    except Exception as e:
        print(f"Error copying {src}: {e}")
