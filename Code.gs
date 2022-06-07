
function GmailAutoSpamDelete() {
  var threads = GmailApp.search("is:spam older_than:2d");
  
  Logger.log("found " + threads.length + " threads:");
  for(var i = 0; i < threads.length; i++) {
   var thread = threads[i];
   Logger.log((i+1) + ". " + thread.getFirstMessageSubject());
  }
  
  var batch_size = 100;
  while (threads.length) {
    var this_batch_size = Math.min(threads.length, batch_size);
    var this_batch = threads.splice(0, this_batch_size);
    
    GmailApp.moveThreadsToTrash(this_batch);
  }
  
}
