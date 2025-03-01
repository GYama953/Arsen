import json
import re
import os

def parse_srt(file_path, video_id, title):
    transcript = []
    if not os.path.exists(file_path):
        print(f"Файл {file_path} не найден!")
        return {"video_id": video_id, "title": title, "transcript": transcript}
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        blocks = content.strip().split('\n\n')
        for block in blocks:
            lines = [line.strip() for line in block.split('\n') if line.strip()]
            if len(lines) >= 3:  # Номер, таймкод, текст
                timecode = lines[1]
                text = ' '.join(lines[2:]).strip()
                match = re.match(r'(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})', timecode)
                if match:
                    start, end = match.groups()
                    transcript.append({"text": text, "start": start, "end": end})
                else:
                    print(f"Неверный формат таймкода в блоке: {timecode}")
    return {"video_id": video_id, "title": title, "transcript": transcript}

# Проверка наличия файлов перед парсингом
data = []
if os.path.exists('src/data/transcript1.srt'):
    data.append(parse_srt('src/data/transcript1.srt', 'video_1', 'voice guide'))
else:
    print("Файл transcript1.srt не найден!")
if os.path.exists('src/data/transcript2.srt'):
    data.append(parse_srt('src/data/transcript2.srt', 'video_2', 'The invisible essence of things'))
else:
    print("Файл transcript2.srt не найден!")

# Сохранение в JSON
with open('src/data/podcastData.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=2)