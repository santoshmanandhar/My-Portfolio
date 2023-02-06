import AWS from 'aws-sdk';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  messageTitle: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      mobile: '',
      messageTitle: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const sendEmail = function () {
    if(data.name=="" || data.email=="" || data.message==""){
      console.log("Required information is empty");
      return;
    }
    console.log('send email', data)
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAUS6FFSPXGS4HEH55',
      secretAccessKey: '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'
    })
    const params = {
      Destination: {
        ToAddresses: ['santosh.manandhar@miu.edu']
      },
      Message: {
        Body: {
          Text: {
            Data: "This is a test email body!"
          }
        },
        Subject: {
          Data: 'Email from Website'
        }
      },
      Source: 'santosh.manandhar1@gmail.com',
    };
    const ses = new AWS.SES({apiVersion: '2010-12-01'});
    
    console.log('send email');
    ses.sendEmail(params).promise().then(res => {
      console.log('The email is sent: ', res);
    }).catch(err => {
      console.error('Error while sending email: ', err);
    })

   setData({
      name:'',
      email:'',
      mobile:'',
      messageTitle:'',
      message:'',
    });
  }
  const {email}=data;
  const {messageTitle} = data;
  const {name}=data;
  const {mobile} = data;
  const {message} = data;

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input id="name" className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={name}/>
      <input
        id="email"
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={email}
      />
       <input id="mobile" className={inputClasses} name="mobile" onChange={onChange} placeholder="Mobile Number" required type="text" value={mobile}/>
       <input id="msgTitle" className={inputClasses} name="messageTitle" onChange={onChange} placeholder="Message Title" required type="text" value={messageTitle}/>

      <textarea
        id="message"
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
         onClick={sendEmail}
        type="submit" >
        Send Message
      </button>
     
    </form>
    
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
