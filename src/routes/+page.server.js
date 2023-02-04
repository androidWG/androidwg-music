import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export function load({ params }) {
	const filepath = path.resolve('src/lib/content/music.yaml');
	const file = fs.readFileSync(filepath, 'utf8');
	const music = yaml.load(file);

	const all_music = music['albums'].concat(music['singles']);
	return {
		music: all_music
	};
}
