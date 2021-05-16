import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/kaugoncalves"
            target="_blank"
            rel="noreferrer"
          >
            Kauan Gonçalves
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Me segue no insta 😍:{" "}
            <a
              href="https://instagram.com/kauans_"
              target="_blank"
              rel="noreferrer"
            >
              @kauans_
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
