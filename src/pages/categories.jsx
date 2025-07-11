export default function CategoriesPage() {
  return (
    <div className="cat-container">
      <a href="/questionhtml">
        <div className="cat-border">
          <p className="cat-param1">HTML</p>
          <p className="cat-param2">
            Test your knowledge with our quick HTML quiz!
          </p>
          <p className="cat-param3">
            Answer a few fun questions to see how well you understand the basics
            of HTML. No pressure
          </p>
        </div>
      </a>

      <a href="">
        <div className="cat-border">
          <p className="cat-param1">CSS</p>
          <p className="cat-param2">How well do you know CSS?</p>
          <p className="cat-param3">
            Try this short quiz to check your knowledge of styling, selectors,
            and layout basics!
          </p>
        </div>
      </a>

      <a href="">
        <div className="cat-border">
          <p className="cat-param1">JAVASCRIPT</p>
          <p className="cat-param2">Ready to test your JavaScript skills?</p>
          <p className="cat-param3">
            Take this quick quiz to challenge your understanding of variables,
            functions, and core JS concepts!
          </p>
        </div>
      </a>
    </div>
  );
}
