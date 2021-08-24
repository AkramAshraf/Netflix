import Ask from "./Ask_subC";
import classes from "./question_C.module.sass";
const Questions = (props) => {
  return (
    <>
      <div className={classes.question} >
        <div className="container">
          <div className={`row d-flex flex-column`}>
            <div className={`${classes.Questions} text-light py-3`}>
              <h1 className={`mb-3 text-center`}>Frequently Asked Questions</h1>

              <Ask
                question={{
                  q_head: "What is Netflix?",
                  q_tail:
                    "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
                }}
              />
              <Ask
                question={{
                  q_head: "How much does Netflix cost?",
                  q_tail:
                    "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.",
                }}
              />
              <Ask
                question={{
                  q_head: "Where can I watch?",
                  q_tail: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                          You can also download your favorite shows with the iOS, Android, or Windows 10 app.Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
                }}
              />
              <Ask
                question={{
                  q_head: "How do I cancel?",
                  q_tail:
                    "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
                }}
              />
              <Ask
                question={{
                  q_head: "What can I watch on Netflix?",
                  q_tail:
                    "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
                }}
              />
              <Ask
                question={{
                  q_head: "Is Netflix good for kids",
                  q_tail: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
                }}
              />
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
