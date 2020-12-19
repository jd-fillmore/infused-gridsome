import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import img from "../img/seo-keywords-for-estate-planners.jpg"
import Card from "../../components/Card/card"
import "../pages/about.scss"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Best SEO Keywords for Estate Planners</title>
        <meta
          name="description"
          content="The best SEO keywords for estate planners and how we can help you integrate them into your marketing strategy."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Best SEO Keywords for estate planners" />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row>
              <Col lg="12">
                <img
                  className="img-fluid"
                  src={img}
                  alt="best seo keywords for estate planners"
                />
                <br />
                <br />
                <br />
                <p>
                  A big part in finding the best SEO keywords for estate planner
                  comes down to a couple things:
                </p>
                <ul>
                  <li>
                    What are your customers searching for, in terms of your
                    estate planner business?
                  </li>
                  <li>What city are you located in?</li>
                </ul>
                <p>
                  Since local <Link to="/seo">search engine optimization</Link>{" "}
                  is going to be so huge for you as a estate planner (since you
                  offer a local service), it's super important to build an SEO
                  keyword <Link to="/digital-strategy">digital strategy</Link>{" "}
                  for your business.{" "}
                </p>
                <p>
                  The entire point of SEO is inbound marketing - that is, to
                  bring clients that are looking for what you offer, directly to
                  you. SEO for a estate planner works so well because even when
                  times are tough - recessions, slow times - it doesn't matter.
                  You're tapping into a market that's outside of your network
                  (people you don't know), who are looking for exactly what you
                  offer.
                </p>
                <p>
                  <strong>
                    Some of the best keywords for estate planners are:
                  </strong>
                  <br />
                  <br />
                  <ul>
                    <li>"your city + estate planner"</li>
                    <li>"your city + local estate planner" </li>
                    <li>"your city + probate estate planner"</li>
                    <li>"your city + will and testament estate planner"</li>
                    <li>"estate planners near me"</li>
                    <li>
                      "best estate planners + your city" or "best will and
                      testament estate planner + your city"
                    </li>
                  </ul>
                  <p>
                    Lets go a bit indepth below and understand why those are the
                    best keywords for your estate planner.
                  </p>
                </p>
                <br />
                <Card>
                  <h3 className="text-center">
                    Want your estate planner website to rank on the first page
                    of Google?
                  </h3>
                  <p className="text-center">
                    Please fill out the form below and we'll get back to your
                    with a quote!
                    <br />
                    <br />
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div class="form-group">
                        <input
                          name="name"
                          type="name"
                          class="form-control"
                          id="Name"
                          aria-describedby="namehelp"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="Email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="phone"
                          type="phone"
                          class="form-control"
                          id="Phone"
                          aria-describedby="urlhelp"
                          placeholder="Cell Phone Number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="url"
                          type="name"
                          class="form-control"
                          id="URL"
                          aria-describedby="urlhelp"
                          placeholder="Website URL"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          id="Message"
                          rows="3"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button type="submit">Submit</button>
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="contact" />
                    </form>
                  </p>
                </Card>
                <h2>
                  So.. what are the best SEO keywords for estate planners?
                </h2>
                <p>
                  In this short post, we'll go through some SEO keyword ideas
                  that are the best to use for estate planners.
                </p>
                <h2>"City + estate planner"</h2>
                <p>
                  You'll notice a pattern as we go through these keywords.
                  <br />
                  <br />
                  Since most estate planners deal with clients locally, you will
                  want to target local people that are searching for your
                  services.
                  <br />
                  <br />
                  If you're in Toronto, you want to show up when someone
                  searches "Toronto estate planners" or "estate planner
                  Toronto".
                  <br />
                  <br />
                  If you're in Los Angeles, "estate planner LA" or "Los Angeles
                  estate planner".
                  <br />
                  <br />
                  These are a bit harder to rank for, because they're such
                  generic terms. Not to mention, since every other estate
                  planner is using SEO to try and rank for that keyword, it's
                  super competitive.
                  <br />
                  <br />
                  Which leads us to something called a long-tail keyword.
                </p>
                <h2>"City + local estate planner"</h2>
                <p>
                  Long tail keywords are usually phrases of four or more words.
                  <br />
                  <br />
                  These are so much easier to rank for in Google because they're
                  longer phrases, therefore they're less competitive in nature.
                  <br />
                  <br />
                  Below, we'll dive even deeper or go into what's known as
                  "buyer's intent" when it comes to searching.
                </p>
                <h2>"City + probate estate planner"</h2>
                <p>
                  Here, people Google not only for an estate planner within
                  their city.. but a specific type. A probate estate planner.
                  See how much more specific, and with that more intention of
                  buying this phrase entails?
                  <br />
                  <br />
                  It's been proven that the more specific that a search term is,
                  the more intent there is for a person to buy.
                </p>
                <h2>"City + will and testament estate planner"</h2>
                <p>
                  You can see the same sort of effect being played out above.
                  <br />
                  <br />
                  I'm in Toronto (City) looking to for a will and testament
                  estate planner.
                  <br />
                  <br />
                  The more specific the search, the more ready-to-buy your
                  customers are.
                </p>
                <h2>
                  "Estate planners near me" or "will and testament estate
                  planner near me"
                </h2>
                <p>
                  This one is a bit funny.
                  <br />
                  <br />A lot of people surprisingly use this search term. It's
                  pretty difficult to rank for - but if you can, you're tapping
                  into a fairly large market of people using SEO to search for
                  what you offer.
                </p>
                <h2>
                  "Best estate planners + city" or "best will and testament
                  estate planners + city"
                </h2>
                <p>
                  Not only is there intent in this search, but you know they're
                  not tire kickers.
                  <br />
                  <br />
                  When someone uses words like "Best", you know that they know
                  that with that, comes money to spend. Which is great for you.
                  In conclusion, these are some of the best SEO keywords for
                  estate planners.
                </p>
                <br />
                <Card>
                  <h3 className="text-center">
                    Want your estate planner website to rank on the first page
                    of Google?
                  </h3>
                  <p className="text-center">
                    Please fill out the form below and we'll get back to your
                    with a quote!
                    <br />
                    <br />
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div class="form-group">
                        <input
                          name="name"
                          type="name"
                          class="form-control"
                          id="Name"
                          aria-describedby="namehelp"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="Email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="phone"
                          type="phone"
                          class="form-control"
                          id="Phone"
                          aria-describedby="urlhelp"
                          placeholder="Cell Phone Number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="url"
                          type="name"
                          class="form-control"
                          id="URL"
                          aria-describedby="urlhelp"
                          placeholder="Website URL"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          id="Message"
                          rows="3"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button type="submit">Submit</button>
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="contact" />
                    </form>
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default About
