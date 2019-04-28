import React from 'react'
// import accordionStyles from '../components/accordion.module.styles'
import styled from 'styled-components'

const Heading = styled.p`
  border-bottom: 2px solid var(--color-light);
  margin-bottom: 0;
  font-weight: 700;
  color: var(--color-darker);
  padding-bottom:25px;

`

const Content = styled.div`
  border-bottom: 2px solid var(--color-light);
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "25px" : "0 25px")} 0;
  transition: all 0.3s;

  p {
    margin: 0;
    color: var(--color-medium);
  }
`;

const Listitem = styled.li`
    list-style: disc;
    list-style-position: inside;
    color: var(--color-primary);

/* Giving every Lisitem other than the first a top padding */
  &:not(:first-of-type) p{
    padding:  25px 0;
    }
`

const data = [
  {
    title: 'Was ist der Wiederbeschaffungswert?',
    answer: 'Die Versicherungsbedingungen und sonstigen Begleitinformationen finden Sie hier'
  },
  {
    title: 'Was versteht man unter dem Begriff Marktwert?',
    answer: 'Die Versicherungsbedingungen und sonstigen Begleitinformationen  Sie hier'
  },
  {
    title: 'Was ist eine Selbsteinschätzung bei der Oldtimerversicherung?',
    answer: 'Die Versicherungsbedingungen und sonstigen  finden Sie hier'
  },
  {
    title: 'Welcher Wert ist der richtige?',
    answer: 'Die Versicherungsbedingungen und sonstigen Begleitinformationen finden Sie hier'
  }
]

// const Accordion = props => (
class Accordion extends React.Component {
        constructor() {
          super();
          this.state = {};
          this.toggleOpen = this.toggleOpen.bind(this);
        }
      
        toggleOpen() {
          this.setState({ open: !this.state.open });
        }
      
        render() {
          return (
            <div>
                 <ul>
                    {data.map((data, index) => {
                        return (
                        <Listitem key={index}>
                            <Heading onClick={this.toggleOpen}>{data.title}</Heading>
                            <Content open={this.state.open}>
                                <p {...data}>{data.answer}</p>
                            </Content>
                        </Listitem>
                        )
                    })}
                    </ul>
            </div>
          );
        }
      }
            
export default Accordion