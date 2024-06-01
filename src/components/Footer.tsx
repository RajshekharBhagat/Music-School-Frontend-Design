"use client";
function Footer() {
  return (
    <div className="grid bg-black md:grid-cols-4 bg-dot-white/[0.2] gap-10 md:gap-6 p-10 md:p-8">
      <div>
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5 md:mt-8 text-sm text-neutral-300">
          Our music school is dedicated to nurturing the next generation of
          musicians. With expert instructors, state-of-the-art facilities, and a
          wide range of programs, we provide the perfect environment for musical
          growth. Whether you are a beginner or an advanced student, our
          personalized approach ensures you achieve your musical goals.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Quick Links</h2>
        <p className="mt-5 md:mt-8 text-sm text-neutral-300">
          <a className="underline hover:text-white" href="/programs">Programs</a>
          <br />
          <a className="underline hover:text-white" href="/events">Events</a>
          <br />
          <a className="underline hover:text-white" href="/faculty">Faculty</a>
          <br />
          <a className="underline hover:text-white" href="/admissions">Admissions</a>
          <br />
          <a className="underline hover:text-white" href="/contact">Contact</a>
          <br />
        </p>
      </div>
      <div >
        <h2 className="text-lg font-semibold">Follow Us</h2>
        <p className="mt-5 md:mt-8 text-sm text-neutral-300">
          Stay connected with us on social media! Follow us for the latest news,
          events, and updates:
          <br />
          <a className="underline hover:text-white" href="https://www.facebook.com">Facebook</a>
          <br />
          <a className="underline hover:text-white" href="https://www.twitter.com">Twitter</a>
          <br />
          <a className="underline hover:text-white" href="https://www.instagram.com">Instagram</a>
          <br />
          <a className="underline hover:text-white" href="https://www.youtube.com">YouTube</a>
          <br />
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <p className="mt-5 md:mt-8 text-sm text-neutral-300">
          Have questions or need more information? Reach out to us:
          <br />
          Phone: (123) 456-7890
          <br />
          Email: info@musicschool.com
          <br />
          Address: 123 Music Ave, Music City, MC 12345
        </p>
      </div>
    </div>
  );
}

export default Footer;
