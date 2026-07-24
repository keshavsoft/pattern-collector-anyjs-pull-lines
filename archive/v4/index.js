import getImportLines from "pattern-collector-anyjs-extract";
import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent, importParseRegex, importSearchRegex,
    showLog = false, showLogStep1 = false
}) => {

    const importLines = getImportLines({
        fileContent, parseRegex: importParseRegex,
        searchRegex: importSearchRegex,
        showLog: showLogStep1
    });

    if (showLog) console.log("importLines-7 : ", importLines);

    const useLines = getUseLines({
        fileContent,
        showLog: showLogStep1
    });

    if (showLog) console.log("useLines-11 : ", useLines);

    return {
        importLines,
        useLines
    };
};

export default startFunc;