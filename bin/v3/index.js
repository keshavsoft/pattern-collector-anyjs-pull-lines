import getImportLines from "pattern-collector-anyjs-import-extract";
import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent, parseRegex, searchRegex,
    showLog = false, showLogStep1 = false
}) => {
    
    const importLines = getImportLines({
        fileContent, parseRegex, searchRegex,
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