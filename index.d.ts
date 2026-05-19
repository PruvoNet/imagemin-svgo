import {type Plugin} from 'imagemin';
import {type Config} from 'svgo';

/**
 * Imagemin plugin for {@link https://github.com/svg/svgo|SVGO}.
 *
 * `options` is passed through verbatim to SVGO's `optimize()` (see
 * `Config` from the `svgo` package). The plugin defaults to
 * `multipass: true`.
 */
declare const imageminSvgo: (options?: Config) => Plugin;

export default imageminSvgo;
