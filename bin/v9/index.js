import getImportLines from "pattern-collector-anyjs-pull-lines-import";
import getConsumptionLines from "pattern-collector-anyjs-pull-lines-consumption";
// import extractLines from "pattern-collector-anyjs-extract";
// import getUseLines from "pattern-collector-routesjs-use-extract";

import packageJson from '../../package.json' with {type: 'json'};

const startFunc = ({ fileContent, importRegex, consumptionRegex,
    showLog = false, showLogStep1 = false
}) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, fileContent, importRegex, consumptionRegex);

    const importLines = getImportLines({
        fileContent,
        parseRegex: importRegex.parseRegex,
        searchRegex: importRegex.searchRegex,
        showLog: showLogStep1
    });

    if (showLog?.withValues) console.log(`${packageJson.name}-importLines-7 : `, importLines);

    const useLines = getConsumptionLines({
        fileContent, parseRegex: consumptionRegex.parseRegex,
        searchRegex: consumptionRegex.searchRegex,
        showLog: showLogStep1
    });

    // const useLines = getUseLines({
    //     fileContent,
    //     showLog: showLogStep1
    // });
    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, importLines, useLines);

    return {
        importLines,
        useLines
    };
};

export default startFunc;