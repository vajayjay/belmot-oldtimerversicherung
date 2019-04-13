import React from 'react'
// import accordionStyles from '../components/accordion.module.styles'
import styled from 'styled-components'


const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Pricing plans',
    paragraph
  },
  {
    title: 'How to apply',
    paragraph
  },
  {
    title: 'Purchasing process',
    paragraph
  },
  {
    title: 'Usage guides',
    paragraph
  }
]

const AccordionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    max-width: 30rem;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06), 0 20px 30px -10px rgba(15, 72, 179, 0.2);  
`
const AccordionListItem = styled.li`
    border-top: 1px solid rgba(0, 0, 0, 0.1);

`

const AccordionItem = styled.div`

`


// const Accordion = props => (
class Accordion extends React.Component {
    render () {
      return (
        <div {...{ className: 'accordionStyles.wrapper' }}>
          <AccordionList>
            {data.map((data, key) => {
              return (
                <AccordionListItem {...{ className: 'accordionStyles.', key }}>
                  <AccordionItem {...data} />
                </AccordionListItem>
              )
            })}
          </AccordionList>
        </div>
      )
    }
  };
  
  class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          paragraph,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <AccordionItem
          {...{
            className: `${opened && 'accordion-itemopened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordionStyles.accordion-item__line' }}>
            <h3 {...{ className: 'accordionStyles.accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordionStyles.accordion-item__icon' }}/>
          </div>
            <div {...{ className: 'accordionStyles.accordion-item__inner' }}>
              <div {...{ className: 'accordionStyles.accordion-item__content' }}>
                <p {...{ className: 'accordionStyles.accordion-item__paragraph' }}>
                  {paragraph}
                </p>
              </div>
            </div>
        </AccordionItem>
      )
    }
  }
  
  // ReactDOM.render(<Accordion />, document.getElementById('app'));


export default Accordion