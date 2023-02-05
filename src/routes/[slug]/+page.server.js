import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export function load({ params }) {
	const filepath = path.resolve('src/lib/content/music.yaml');
	const file = fs.readFileSync(filepath, 'utf8');
	const music = yaml.load(file);

	console.log(params);

	const all_music = music['albums'].concat(music['singles']);
	let selected = all_music.filter((obj) => {
		return obj.filename == params.slug;
	});
	return {
		release: selected[0]
	};
}
