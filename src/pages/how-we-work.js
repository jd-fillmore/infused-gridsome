import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import "../pages/how-we-work.scss"

const HowWeWork = () => {
  return (
    <>
      <Helmet>
        <title>How We Work - Infused</title>
        <meta
          name="description"
          content="Check out to see the process of how Infused kicks off projects, and works closely with their clients to achieve their online business goals."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="How We Work"
        description="If we didn't have a thought-out, structured process then we'd be all over the place."
      />
      <InnerContent>
        <section className="how-we-work">
          <Container>
            <Row>
              <Col lg="7">
                <h1>1. Discuss</h1>
                <p className="subtitle">
                  We get to know you and your project needs.
                </p>
              </Col>
              <Col lg="5">
                <p>
                  On a quick 15-20 minute call, we discuss and extract
                  everything you're looking for. Whether it's a new website, or
                  you'd like to bring more customers / clients to your business
                  through local SEO or digital strategy, we gather all of the
                  necessary information for your project.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <h1>2. Project Evaluation</h1>
                <p className="subtitle">
                  Deep-dive project evaluation with bespoke recommendations.
                </p>
              </Col>
              <Col lg="5">
                <p>
                  Virtually all digital and web development agencies offer a
                  project proposal - not us. Enter the Project Evaluation. We
                  want to thoroughly get to know your company, your business
                  goals and what you'd like to accomplish with your project.
                  <br />
                  <br />
                  Based on our in-depth research and findings, we will offer you
                  extremely detailed recommendations on how to move forward. If
                  you agree to move forward with us, we get the important stuff
                  signed, requirements delivered and the project is underway.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <h1>3. Get To Work</h1>
                <p className="subtitle">Time to get our hands dirty.</p>
              </Col>
              <Col lg="5">
                <p>
                  This is where the magic happens. If we're developing a website
                  for you, it's time to design, build and launch it. If we're
                  doing local SEO, it's month-to-month effort to help you rank
                  on the first page of Google. If we're developing a digital
                  strategy, intense research among other diligent efforts to
                  make that happen.
                  <br />
                  <br />
                  In whichever way we help you, we'll be working closely
                  together to make it happen.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <h1>4. Deliver</h1>
                <p className="subtitle">The fruits of our labour.</p>
              </Col>
              <Col lg="5">
                <p>
                  After all is said and done, you will receive the final, modern
                  product. Our relationship doesn't stop there. We pride on
                  having ongoing relationships with our clients, making sure we
                  can best serve them in whatever digital ways possible for
                  years to come.
                </p>
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

export default HowWeWork