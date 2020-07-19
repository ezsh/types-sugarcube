import {SimpleAudio} from "./audio";
import {Config} from "./config";
import {Engine} from "./engine";
import {Macro} from "./macro";
import {Settings} from "./settings";
import {State} from "./state";
import {Story} from "./story";
import {ISugarCube} from "./sugarcube";
import {TemplateAPI} from "./template";
import {Dialog, Fullscreen, LoadScreen} from "./ui";
import {Wikifier} from "./wiki";
import {SugarCubeSetupObject, SugarCubeSettingVariables} from "./userdata";

declare global {

	const SugarCube: ISugarCube;

	/**
	 * Configuration API.
	 * @since 2.0.0
	 */
	const Config: Config;

	/**
	 * Dialog API.
	 * @since 2.0.0
	 */
	const Dialog: Dialog;

	/**
	 * Engine API.
	 */
	const Engine: Engine;
	/**
	 * Macro API.
	 * @since 2.0.0
	 */
	const Macro: Macro;
	/**
	 *
	 * @since 2.28.0
	 */
	const SimpleAudio: SimpleAudio;

	/**
	 * Template API.
	 * @since 2.29.0
	 */
	const Template: TemplateAPI;

	/**
	 * Strings localization object.
	 * @since 2.10.0
	 */
	const l10nStrings: {[x: string]: string};

	/**
	 * Object that authors/developers may use to set up various bits of static data. Generally, you would use this for data that
	 * does not change and should not be stored within story variables, which would make it part of the history.
	 * @since 2.0.0
	 */
	const setup: SugarCubeSetupObject;
	/**
	 * A prototype-less generic object whose properties and values are defined by the Setting.addToggle(),
	 * Setting.addList(), and Setting.addRange() methods.
	 *
	 * Normally, the values of its properties are automatically managed by their associated Settings dialog
	 * control. If necessary, however, you may manually change their values—n.b. you'll need to call the
	 * Setting.save() after having done so.
	 * @since 2.0.0
	 */
	const settings: SugarCubeSettingVariables;

	const Fullscreen: Fullscreen;
	const LoadScreen: LoadScreen;

	const Setting: Settings;
	const State: State;
	const Story: Story;
	const Wikifier: Wikifier;
}

export {};
