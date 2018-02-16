
import React, { Component } from 'react'
import { Container, List, ListItem, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { View, Image } from 'react-native'
import { getBbcNews } from '../../Api/request'
import _ from 'lodash'
import moment from 'moment'

class Bbc extends Component {
        state = { 
            data: []
         }
    componentWillMount() {
        getBbcNews()
        .then(res => this.setState({data: res.articles}))
    }
    componentWillUnmount(){
        this.setState({data: []})
    }
    render() { 
        const {data} = this.state
        if( _.isEmpty(data)) {
            return (
                <View></View>
            )
        } 
        return (
                <Content style={{backgroundColor: 'red'}}>
                   <List dataArray={data}
                     renderRow={(item) =>
                        <ListItem>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{uri: item.urlToImage}} />
                                        <Body>
                                        <Text>{item.title}</Text>
                                        <Text note>{item.author}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                <Left>
                                    <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                    <Icon active name="calendar" />
                                    <Text>{moment(item.publishedAt).format("l")}</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>{moment().diff(item.publishedAt, "hours")}</Text>
                                </Right>
                                </CardItem>
                            </Card>
                        </ListItem>
                     }>
                     </List>
                </Content>
            )
    }
}
 
export default Bbc;


<Card>
<CardItem>
  <Left>
    <Thumbnail source={{uri: 'Image URL'}} />
    <Body>
      <Text>NativeBase</Text>
      <Text note>GeekyAnts</Text>
    </Body>
  </Left>
</CardItem>
<CardItem cardBody>
  <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
</CardItem>
<CardItem>
  <Left>
    <Button transparent>
      <Icon active name="thumbs-up" />
      <Text>12 Likes</Text>
    </Button>
  </Left>
  <Body>
    <Button transparent>
      <Icon active name="chatbubbles" />
      <Text>4 Comments</Text>
    </Button>
  </Body>
  <Right>
    <Text>11h ago</Text>
  </Right>
</CardItem>
</Card>
