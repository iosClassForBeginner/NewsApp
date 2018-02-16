
import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon,Body, DeckSwiper, Left, List, ListItem} from 'native-base'
import { View, Text, Image } from 'react-native'
import { getBbcNews } from '../../Api/request'

const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../../../assets/splash.png'),
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../../assets/splash.png'),
      },
  ]
class Bbc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    componentWillMount() {
        const newArray = []
        getBbcNews()
        .then(res => {
            res.articles.map(data => {
                newArray.push({text: data.title, image: data.urlToImage, name: data.author})
                })
            })
            .then(() => {
                this.setState({data: newArray})
            })
            
    }
    render() { 
        const {data} = this.state
        console.log("==========================", data)
        if (!data ){
            return (
                <View><Text>hello</Text></View>
            )
        }
        return (
                <Content style={{backgroundColor: 'red'}}>
                    <Text>hhhhh</Text>
                    <DeckSwiper
                        dataSource={ data }
                        renderItem={ item => 
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={{uri: item.image}} />
                                <Body>
                                <Text>{item.name}</Text>
                                <Text note>{item.title}</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
                            </CardItem>
                            <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.text}</Text>
                            </CardItem>
                        </Card>
                        }
                 />
                </Content>
            )
    }
}
 
export default Bbc;