#!/usr/bin/env python
from PIL import Image, ImageDraw, ImageFont

movie = ""
star = ""
search = ""
clock = ""
play = ""
mic = ""
youtube = ""
tv = ""


def create_image(width, height, content, output):
    img = Image.new('RGB', (width, height), color=(17, 17, 17))

    font_size = int(min(width, height) / 2)
    fnt = ImageFont.truetype('../font/fontello.ttf', font_size)
    draw = ImageDraw.Draw(img)
    w, h = draw.textsize(content, font=fnt)
    draw.text(((width - w) / 2, (height - h) / 2), content, font=fnt, fill=(238, 238, 238))

    img.save(output + "_" + str(width) + "x" + str(height) + '.png')


def main():
    create_image(200, 300, movie, "movie_poster")
    create_image(400, 600, movie, "movie_poster")
    create_image(200, 300, tv, "tvshow_poster")
    create_image(400, 600, tv, "tvshow_poster")
    create_image(200, 300, mic, "concert_poster")
    create_image(400, 600, mic, "concert_poster")


if __name__ == '__main__':
    main()
