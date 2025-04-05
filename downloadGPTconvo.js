
//script to download gpt convo in json , will clean later
allMsg = document.getElementsByClassName('text-token-text-primary w-full')
allMsgsInText=[]
for(i = 0 ; i< allMsg.length ;i++){
    allMsgsInText.push(allMsg[i].innerText)
}
const blob = new Blob([JSON.stringify(allMsgsInText, null, 2)], { type: 'application/json' });

// Create a download link
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'chat_conversation.json'; // The name of the file to download

// Trigger the download
link.click();
