import getImportLines from "pattern-collector-anyjs-extract";

const startFunc = ({ fileContent, parseRegex, searchRegex,
    showLog = false, showLogStep1 = false
}) => {

    const importLines = getImportLines({
        fileContent, parseRegex,
        searchRegex, showLog: showLogStep1
    });

    if (showLog) console.log("importLines-7 : ", importLines);

    return importLines;
};

export default startFunc;