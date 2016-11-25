import simpleaudio as sa

class Music:
    
    def music_player(self):
        wave_obj = sa.WaveObject.from_wave_file("music/intro.wav")
        play_obj = wave_obj.play()
