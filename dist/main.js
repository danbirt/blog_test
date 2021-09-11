const WolframNotebookEmbedder = require('wolfram-notebook-embedder');
var url = "https://www.wolframcloud.com/obj/danbirt/Published/TestCloudDeploy.nb";
var embedding = WolframNotebookEmbedder.embed('url', document.getElementById('notebookContainer'));