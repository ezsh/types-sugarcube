import {SimpleAudio} from "./audio";
import {Config} from "./config";
import {Engine} from "./engine";
import {Macro} from "./macro";
import {Save} from "./save";
import {ScriptingAPI} from "./scripting";
import {Settings} from "./settings";
import {State} from "./state";
import {Story} from "./story";
import {Dialog, Fullscreen, UI} from "./ui";
import {SugarCubeSettingVariables, SugarCubeSetupObject} from "./userdata";
import {Wikifier} from "./wiki";

export interface ISugarCube {
	Browser: {
		userAgent: string;
		isMobile: {
			Android: boolean;
			BlackBerry: boolean;
			iOS: boolean;
			Opera: boolean;
			Windows: boolean;
			any: () => boolean;
		},
		isGecko: boolean;
		isIE: boolean;
		ieVersion: number | null;
		isOpera: boolean;
		operaVersion: number | null;
		isVivaldi: boolean;
	};
	Config: Config;
	Dialog: Dialog;
	Engine: Engine;
	Fullscreen: Fullscreen;
	Has: {
		audio: boolean;
		fileAPI: boolean;
		geolocation: boolean;
		mutationObserver: boolean;
		performance: boolean;
		touch: boolean;
		transitionEndEvent: string;
	};
	Macro: Macro;
	Save: Save;
	Scripting: ScriptingAPI;
	Setting: Settings;
	SimpleAudio: SimpleAudio;
	State: State;
	Story: Story;
	UI: UI;
	Wikifier: Wikifier;
	/**
	 * Player settings object, set up by the author/developer. See Setting API for more information.
	 * @since 2.0.0
	 */
	settings: SugarCubeSettingVariables;
	/**
	 * Object that authors/developers may use to set up various bits of static data.
	 *
	 * Generally, you would use this for data that does not change and should not be stored
	 * within story variables, which would make it part of the history.
	 * @since 2.0.0
	 * */
	setup: SugarCubeSetupObject;
	storage: any;
	session: any;
	version: {
		title: string;
		major: number;
		minor: number;
		patch: number;
		prerelease: string | null;
		build: number;
		date: Date;
		toString(): string;
	}
}
