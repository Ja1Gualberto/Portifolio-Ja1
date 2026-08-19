import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const formRef = useRef();
  
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  
  const formChange = ({target: {name, value }}) => {
    setForm({...form, [name]: value })
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    
    try {
      
      await emailjs.send(
        import.meta.env.VITE_EMAIL_API_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: 'João',
          from_email: form.email,
          to_email: 'gualberto.silvaj2@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      
      setLoading(false);
      
      alert('Your message has been sent!');
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!')
      
    }
    
    
  }

  return(
    <section className="c-space my-20" id="contact">
      
      <div className="relative min-h-screen flex items-center justify-center flex-col" style={{overflowX: 'hidden'}}>
        <img src="/assets/terminal.png" alt="terminalbg" className="absolute inset-0 w-full min-h-full" style={{objectFit: 'fill'}} />
        
        <div className="relative z-10 mt-12" style={{width: '100%', maxWidth: '36rem', boxSizing: 'border-box', padding: '0 1.25rem'}}>
          
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">Whether you're looking build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
          
          <form action="" ref={formRef} onSubmit={formSubmit} className="mt-12 flex flex-col space-y-7">
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={formChange}
                required
                className="field-input"
                placeholder="ex: Jhon"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email Address</span>
              
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={formChange}
                required
                className="field-input"
                placeholder="ex: jhon.ex@gmail.com"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your message</span>
              
              <textarea
                name="message"
                value={form.message}
                onChange={formChange}
                rows={5}
                required
                className="field-input"
                placeholder="Shere your thoughts or inquiries"
              >
                
              </textarea>
            </label>
            
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact;