import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.isServer){
    //This is a setup for SMTP email to send emails, this information SHOULD be hidden since it includes a password
    process.env.MAIL_URL="smtp://StudyRingConcordia%40gmail.com:soen341concordia@smtp.gmail.com:465/"; 
  }
})
