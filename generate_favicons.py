from PIL import Image, ImageDraw
import os

def create_rounded_icon(input_path, output_path, size, corner_radius_ratio=0.2):
    img = Image.open(input_path)
    img = img.resize((size, size), Image.Resampling.LANCZOS)

    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)

    corner_radius = int(size * corner_radius_ratio)

    draw.rounded_rectangle([(0, 0), (size, size)], corner_radius, fill=255)

    img.putalpha(mask)
    img.save(output_path, 'PNG')

def main():
    input_icon = 'public/images/icon.png'

    sizes = [
        (16, 'public/favicon-16x16.png'),
        (32, 'public/favicon-32x32.png'),
        (192, 'public/icon-192x192.png'),
        (512, 'public/icon-512x512.png'),
    ]

    for size, output_path in sizes:
        create_rounded_icon(input_icon, output_path, size)

    icon_16 = Image.open('public/favicon-16x16.png')
    icon_32 = Image.open('public/favicon-32x32.png')

    icon_16.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32)],
                 append_images=[icon_32])

if __name__ == '__main__':
    main()
