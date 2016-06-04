import { IOptions } from "./interfaces/IOptions";

export class OptionsNormalizer {
    /**
     * @type {IOptions}
     */
    public static DISABLED_UNICODE_ARRAY_OPTIONS: IOptions = {
        encodeUnicodeLiterals: false,
        rotateUnicodeArray: false,
        unicodeArray: false,
        wrapUnicodeArrayCalls: false
    };

    /**
     * @type {IOptions}
     */
    public static SELF_DEFENDING_OPTIONS: IOptions = {
        compact: true,
        rotateUnicodeArray: true,
        selfDefending: true,
        wrapUnicodeArrayCalls: true
    };

    /**
     * @param options
     * @returns {IOptions}
     */
    public static normalize (options: IOptions): IOptions {
        let normalizedOptions: IOptions = Object.assign({}, options);

        normalizedOptions = OptionsNormalizer.unicodeArrayRule(normalizedOptions);
        normalizedOptions = OptionsNormalizer.selfDefendingRule(normalizedOptions);

        return normalizedOptions;
    }

    /**
     * @param options
     * @returns {IOptions}
     */
    private static selfDefendingRule (options: IOptions): IOptions {
        if (options['selfDefending']) {
            Object.assign(options, OptionsNormalizer.SELF_DEFENDING_OPTIONS);
        }

        return options;
    }

    /**
     * @param options
     * @returns {IOptions}
     */
    private static unicodeArrayRule (options: IOptions): IOptions {
        if (!options['unicodeArray']) {
            Object.assign(options, OptionsNormalizer.DISABLED_UNICODE_ARRAY_OPTIONS);
        }

        return options;
    }
}