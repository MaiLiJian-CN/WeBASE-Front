export default {
    project: {
        name: 'Node Console',
        blocks: 'Blocks',
        nodes: 'Nodes',
        transactions: 'Transactions',
        pendingTransactions: 'Pending Transactions',
    },
    route: {
        statistics: 'Overview',
        nodeManagement: 'Node Mgmt',
        nodeManagementQ: 'Node Management',
        contractManagement: 'Contract Mgmt',
        contractManagementQ: 'Contract Management',
        contractIDE: 'Contract IDE',
        contractList: 'Contract List',
        systemMonitoring: 'System Metrics',
        hostMetrics: 'Host Metrics',
        nodeMetrics: 'Node Metrics',
        privateKeyManagement: 'Private Key Mgmt',
        privateKeyManagementQ: 'Private Key Management',
        subscribeEvent: 'Subscribe Event',
        blockEvent: 'Block Event',
        contractEvent: 'Contract Event',
        testUserList: 'Tester List',
        abiList: 'ABI List',
        parseAbi: 'ABI Encode',
        eventCheck: 'Event Search',
    },
    navbar: {
        dashboard: 'Dashboard',
        github: 'Github',
        logOut: 'Log Out',
        profile: 'Profile',
        theme: 'Theme',
        size: 'Global Size'
    },
    documentation: {
        documentation: 'Documentation',
        github: 'Github Repository'
    },
    permission: {
        addRole: 'New Role',
        editPermission: 'Edit',
        roles: 'Your roles',
        switchRoles: 'Switch roles',
        tips: 'tips',
        delete: 'Delete',
        confirm: 'Confirm',
        cancel: 'Cancel'
    },
    components: {
        documentation: 'Documentation',
        tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
        dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
        stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
        backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
        backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
        imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
    },
    table: {
        type: 'Type',
        search: 'Search',
        addUser: 'Add User',
        importPrivateKey: 'Import Private Key',
        export: 'Export',
        id: 'ID',
        date: 'Date',
        status: 'Status',
        actions: 'Actions',
        edit: 'Edit',
        publish: 'Publish',
        delete: 'Delete',
        cancel: 'Cancel',
        confirm: 'Confirm',
        nodeId: 'Node ID',
        blockHeight: 'Block Height',
        pbftView: 'Pbft View',
        run: 'Run',
        abnormal: 'Abnormal',
        address: 'Address',
        publicKey: 'Public Key',
        user: 'User',
        transactionHash: 'Transaction Hash',
        transactionInfo: 'Transaction Info',
        transactionReceipt: 'Transaction Receipt',
        contractName: 'Name',
        contractPath: 'Location',
        contractAddress: 'Address',
        contractAbi: 'ABI',
        contractBin: 'Bin',
        createdTime: 'Created Time',
        importPem: "Import Pem Private Key",
        addBlockEvent: "Add Block Event",
        addContractEvent: "Add Contract Event",
        blockEventInfo: "Event Info",
        appId: "App Id",
        exchangeName: "Exchange",
        queueName: "Queue Name",
        routingKey: "RoutingKey",
        groupId: "Group Id",
        fromBlock: 'From',
        toBlock: 'To',
        topicList: 'Topic List',
        fileType: "File Type",
        fileName: "PrivateKey Name",
        eventName: 'Event Name',
        eventValue: 'Event',
    },
    errorLog: {
        tips: 'Please click the bug icon in the upper right corner',
        description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
        documentation: 'Document introduction'
    },
    excel: {
        export: 'Export',
        selectedExport: 'Export Selected Items',
        placeholder: 'Please enter the file name (default excel-list)'
    },
    zip: {
        export: 'Export',
        placeholder: 'Please enter the file name (default file)'
    },
    pdf: {
        tips: 'Here we use window.print() to implement the feature of downloading PDF.'
    },
    notice: {
        copySuccessfully: 'Copy successfully',
        copyFailure: 'Copy failed, key is empty'
    },
    dialog: {
        addUsername: 'Add Username',
        pleaseEnterUserName: 'Please type in username',
        rivateKeyVerifyLength: 'The length is between 3 and 32 characters',
        rivateKeyVerifyLength1_32: 'The length is between 1 and 32 characters',
        rivateKeyVerifyFont: 'Can only be composed of numbers or letters',
        rename: 'Rename',
        newFile: 'NewFile',
        delete: 'Delete',
        exportJavaNote: 'Note: Package name must equal to contract name',
        delete: 'Delete',
        cancel: 'Cancel',
        confirm: 'Confirm',
        sureExport: 'Sure Export',
        sureDelete: 'Sure Delete',
        contractNameIllegal: 'Contract name illegal',
        folderNameIllegal: 'Folder name illegal',
        folderName: 'Folder Name',
        pleaseType: 'Please type in',
        appId: "Please enter the application number",
        exchangeName: "Please enter the exchange name",
        queueName: "Please enter the queue name",
        groupId: "Please enter the group id",
        contractAbi: "Please enter contract Abi",
        contractAddress: "Please enter contract address",
        fromBlock: "Please enter from block",
        toBlock: "Please enter to block",
        topicList: "Please enter topic List",
        eventName: "Please enter event name",
        search: 'Search',
        exportSol: 'Export'
    },
    placeholder: {
        globalSearch: 'Search by Block Number / Tx Hash',
        javaPackage: 'Example: com.webank',
        selected: 'select',
        selectedAccountAddress: 'Select Account Address',
        selectedNoUser: 'No available user, please create a new user key',
        selectedContractAddress: 'Select Contract Address',
        functionName: 'Function Name',
        contractListSearch: 'Search by Name / Address',
        selectedDay: 'Pick a day',
        selectedTimeRange: 'Select Time Range',
        to: 'to',
        startTime: 'Start Time',
        endTime: 'End Time',
    },
    title: {
        copyHash: 'Copy Hash',
        copy: 'Copy',
        copyAddress: 'Copy Address',
        copyPubliceKey: 'Copy Publice Key',
        copyContractAddress: 'Copy Contract Address',
        copyContractName: 'Copy Contract Name',
        copyAbi: 'Copy Abi',
        copyBin: 'Copy Bin',
        newFile: 'New File',
        newFolder: 'New Folder',
        upload: 'Upload',
        save: 'Save',
        compile: 'Compile',
        deploy: 'Deploy',
        callContract: 'Call Contract',
        exportJavaFile: 'Export as Java File',
        handleSave: 'Ctrl+s Save',
        handleCompile: 'Alt+c Compile',
        handleDeploy: 'Alt+d Deploy',
        handleCallContract: 'Alt+t Call Contract',
        selectAccountAddress: 'Select Account Address',
        writeJavaName: 'Java Package Name',
        selectDirectory: 'Select Directory',
        txnContractAddExp: 'Optional，Import deployed contract address',
        restore: 'Restore',
        zoom: 'Zoom',
        back: 'Back',
        stack: 'Stack',
        tiled: 'Tiled',
        detailsAbi: 'Details Abi',
        detailsTxn: 'Transactions Details',
        acquisitionSwitch: 'Acquisition switch',
        check: 'check',
        detele: 'detele',
        uploadSolc: 'Upload different versions of compiler',
        checkEvent: 'Event Search',
        checkEventResult: 'Event',
        eventName: 'Event Name',
        transactionReceipt: 'Transactions Receipt',
    },
    text: {
        noContract: 'Please create a new contract',
        hide: 'Hide',
        expand: 'Expand',
        compilationFailed: 'Contract was not compiled or failed to compile',
        compilationSucceeded: 'Contract compilation succeeded',
        compilationBegin: 'Contract starts to compile.',
        compiling: 'Contract compiling ...',
        contractFileName: 'Contract name must equal to file name',
        saveFailed: 'Save failed',
        saveSucceeded: 'Save succeeded',
        deploySucceeded: 'Deploy succeeded',
        deployFailed: 'Deploy failed',
        redeploy: 'Contract has been modified, please re-deploy',
        systemError: 'System Error',
        contractSameDirectory: 'Contract name must be unique under the same directory',
        unsavedContract: 'Contract modifed and unsaved. Save',
        contractName: 'Contract Name',
        filePath: 'File Path',
        pleaseEnter: 'Please type in',
        errorNewFolderName: 'Error：Folder already exists',
        contractAddress: 'Contract Address',
        acountAddress: 'Account',
        parame: 'Parame',
        deployParameVec: 'If paramaters are arrays , separated by ","',
        searchSucceeded: 'Query successfully',
        txnSucceeded: 'Transaction succeeded',
        txnFailed: 'Transaction failed',
        sendFailed: 'Send transaction failed',
        sendFunction: 'function',
        showDate: 'Show Date',
        comparingDate: 'Comparing By Date',
        fromTo: 'From/to',
        dataGranularity: 'Data Granularity',
        minutes: 'Min',
        seconds: 'Sec',
        confirm: 'Confirm',
        confirmDelete: "Are you sure to delete?",
        usage: ' Usage',
        hardDisk: ' Hard Disk',
        memory: ' MEM',
        uplink: ' Uplink',
        downlink: ' Downlink',
        bandwidth: ' Bandwidth',
        blockHeight: 'Block Height',
        pendingTransactions: 'Pending Transactions',
        comparingByDay: 'Comparing By Day',
        noMetrics: 'Data uncollected or data is empty',
        showByDay: 'Show By Day',
        searchEmpty: 'The query result is empty',
        noData: 'No Data',
        importSuccessed: 'Import Successed',
        updateSuccess: 'Update Successed',
        importFailed: 'Import Failed',
        addUserSuccessed: 'Create successed',
        deleteUserSuccessed: 'Delete successed',
        nameNoSame: 'User names cannot be the same',
        uploadSol: 'Please upload contract files(extension: .sol)',
        fileExceeds: 'File size exceeds 400k, please upload files smaller than 400k',
        txnDecodeBtn: 'Decode',
        txnEncodeBtn: 'Restore',
        toggleSuccessed: 'Switch successed',
        toggleFailed: 'Switch failed',
        toggleOpen: 'Open',
        toggleDown: 'Down',
        privateKeyManagementInfo: "Support for exporting private keys, you can export private keys to local.",
        FileName: "privateKey Name",
        importFile: "Import File",
        pemName: "Pem File Name",
        appId: "Unique number of the application that registered the event notification",
        exchangeName: "Switch to which the queue belongs",
        queueName: "Queue name, usually appid",
        contractAbi: "ABI of contract, used for contract event analysis,list type;for example, [HelloWorld (string)]",
        contractAddress: "Contract address",
        fromBlock: "The minimum value is 0; the default value is latest, which means listening to the latest block",
        toBlock: "The minimum value is 0; the default value is latest, which means listening to the latest block",
        topicList: "There is no space between the list and event parameters of contract event, and multiple events are separated by English semicolons (;); for example, setevent (string, string); transferevent (address, uint256)",
        parse: 'Parse',
        addParameter: "Add parameter",
        remove: 'Remove',
        functionType: "Function type",
        argument: "Argument",
        copy: "Copy",
        parseTitle: "Enter your contract's ABI to auto-parse",
        parseAbiManually: "Or enter your parameters manually",
        addAbi: "Import ABI",
        eventParam: 'Please follow the prompt of event parameter type strictly',
    },
    contracts: {
        createFile: "Create File",
        createFolder: "Create Folder",
        upLoadFile: "Upload File",
        contractTips: "All contracts deployed within the group need to be added in contract management, compiled and saved, otherwise it will be judged as abnormal contracts.",
        rename: "Rename",
        contractCompileSuccess: "Contract Compiled Successfully!",
        contractCompileFail: "Contract Compilation Failed!",
        renameFail: "Deployed contract cannot be renamed!",
        nameFail: "The same contract exists in the same directory. Please rename it!",
        contractLong: "Please enter numbers or letters, 1 to 32 digits in length!",
        contractSize: "The file size is more than 400k, please upload a file less than 400k!",
        contractType: "Please upload a file in. Sol format!",
        contractNameSameFail: "Contract with the same name cannot exist in the same directory!",
        contractSaveSuccess: "Contract saved successfully!",
        contractDeleteFail: "There are deployed contracts in the folder, unable to delete the folder!",
        contractSaveTips: "Press Ctrl + s to save the contract content",
        contractOpenTips: "Please click on the left panel to open a contract or create a new contract",
        sendTransaction: "Call",
        changeUser: "Select User",
        compileSuccess: "< Compile Successfully！",
        conmileNameError: "Contract name and file name should be consistent!",
        deploySuccess: "< Deployment Success！",
        contractDeploySuccess: "Contract deployed successfully！",
        contractName: "Name",
        filePath: "File Path",
        folderName: "Folder Name",
        folderSameFail: "The new folder has the same name as the existing folder",
        user: "User",
        params: "Params",
        paramsInfo: 'If the parameter type is an array, enter the following format, comma separated, with double quotes for non-numeric and Boolean values, such as ["aaa","bbb"] and [100,101]; Escape if array parameters contain double quotes, for example: ["aaa\\"bbb","ccc"].',
        contractAddress: "Address",
        method: "Method",
        contractAddressInput: "Please enter the contract address",
        contractAddressInfo: "Optional item,import deployed contract addresses.",
        selectUser: "Please Select Users",
        methodType: "Method Type",
        methodName: "Method Name",
        contractCatalogue: "Location",
        copyContractAddress: "Copy Contract Address",
        contractAbi: "ABI",
        contractBin: "Bin",
        runtimeBin: "Runtime-bin",
        copyContractAbi: "Copy Contract Abi",
        copyContractBin: "Copy Contract Bin",
        abiInfo: "ABI Details",
        contractVersion: "Version",
        adminUser: 'User Account',
        createTable: "Create Table",
        insertTable: "Insert Table Record",
        searchTable: "Query Table Record",
        updateTable: "Update Table Record",
        deleteTable: "Delete Table Record",
        tableDetail: "Display Table Details",
        addPrivateKeyInfo: "Please add a private key user!",
        updateAbi: "Update",
        deleteAbi: "Delete",
        operation: "Operate",
        limit_1: "Only one file can be uploaded at a time"
    },
    rule: {
        textLong: "1 to 32 characters in length",
        textLong1_12: "1 to 12 digits in length",
        textLong1_32767: "Must be less than or equal to 32767",
        passwordError: "Login password error",
        loginPasswordType: "Please input the password correctly",
        ipName: "Please enter IP name",
        ipRule: "IP does not comply with rules",
        portName: "Please enter the port name",
        portLong: "1 to 12 digits in length",
        portRule: "Port does not comply with rules",
        agencyName: "Please enter the agency name",
        agencyLong: "1 to 16 digits in length",
        agencyRule: "Please input Chinese, English and numbers for agency name",
        adminRule: "Please select administrator account",
        nodeType: "Please select a node type",
        contractName: "Please enter the contract name",
        contractAddress: "Please enter the contract address",
        contractAbi: "Please enter the contract ABI",
        contractLong: "1 to 32 characters in length",
        contractRule: "Contract name does not conform to the rules",
        folderName: "Please enter a folder name",
        folderLong: "1 to 12 characters in length",
        folderRule: "Folder name does not conform to the rules",
        selectAdmin: "Please select an administrator",
        sqlRule: "Please input sql",
        outUserAddress: "Please select an external account address",
        configName: "Please select a configuration name",
        configValue: "Please enter the configuration value",
        configValueNumber: "Configuration value must be a number",
        accountRule: "User name can only enter letters and numbers",
        passwordLong: "6 to 12 characters in length",
        passwordRule: "Composed of letters, numbers, and at least one uppercase letter and one lowercase letter",
        groupTimestamp: "Please enter Timestamp",
        nodeIdList: "Please enter nodeList",
        number: "Please enter number",
        groupId: "Please enter group ID",
        correctJson: "Enter correct JSON",
        blockNumber: "Greater than 0",
    },
    nodes: {
        nodeFront: "Front Node",
        addFront: "Add",
        frontId: "Front ID",
        ip: "IP",
        frontPort: "Front Port",
        agency: "Agency",
        modifyTime: "Modify Time",
        nodeStyle: "Node Type",
        operation: "Actions",
        sealer: "Sealer",
        observer: "Observer",
        remove: "Remove",
        deleteNode: "Delete Node",
        nodeList: "Node List",
        nodeDescription: "Node management Description: node types can be set through node management. Including: 1. Set the corresponding node as a consensus node according to the node node ID. 2. Set the corresponding node as the observation node according to the node nodeid. 3. Set the corresponding node as free node according to node nodeid.",
        updateNodesType: "Update Nodes Type",
        frontConfig: "Front Configure",
        addFrontSuccessMsg: "Add Front Success",
        addFrontErrMsg: "add Front Fail",
        admin: "Admin",
        observerText: "Set as observer node, node will not sealer",
        removeText: "Set as remote node, node will not sealer and synchronization",
        sealerText: "Set as sealer node, node will  sealer.Please contact professional settings",
        version: "Version",
        addGroup: "Generate Group",
        groupId: "Group Id",
        groupName: "Group Name",
        nodeCount: "Node Count",
        createTime: "Create Time",
        nodeId: "Node Id",
        frontIp: "Front ID",
        modifyGroup: "Modify Group",
        addAbi: "Import ABI",
        groupStatus: "Status",
        status: "Status",
        groupTimestamp: "Timestamp"
    },
    privateKey: {
        addUser: "Add Users",
        importRivateKey: "Import Rivate Key",
        addUserTips: "The account number of the transaction sent in the group needs to be added to the private key management, otherwise it will be judged as an abnormal user.",
        searchUser: "Please enter user name or public key address",
        copyPublicKey: "Copy Public Key",
        privateKey: "Private Key",
        publicKey: "Public Key",
        createUser: "Create User",
        userName: "Name",
        userId: "ID",
        description: "Description",
        userAddress: "Address",
        userStatus: "Status",
        inputDescription: "Please enter User Description",
        updateUserSuccess: "User modified successfully",
        normal: "Normal",
        disable: "Disable",
        privateKeyUser: "Private key user",
        publicKeyUser: "Public key user",
        publicKeyInfo: "Public key information",
        inputUserName: "Please enter User Name",
        inputPublicInfo: "Please enter public key information or public key address.",
        userLong: "Within 120 characters",
        inputPublic: "Please enter public key information",
        addUserSuccess: "User added successfully!",
        addUserFail: "Failed to add user!",
        signUserId: 'Sign User Id',
        inputFileName: "Please enter privateKey name",
        inputFileType: "Please enter privateKey type",
        fileName: "PrivateKey Name",
        fileType: "File Type",
        importFile: "Import file",
        copy: "Copy",
        password: "Password",
        placeholderPassword: "Please enter password",
        passwordError: "Password cannot be Chinese",
        file: "File"
    },
}
