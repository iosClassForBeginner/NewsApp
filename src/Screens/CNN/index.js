
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Body, Left, List, ListItem} from 'native-base'
import {getCnnNews} from '../../Api/request'

class Cnn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    componentWillMount() {
        getCnnNews()
        .then(res=> this.setState({data: res.articles}))
    }
    render() { 
        return (
            <Content>

                <List dataArray={this.state.data}
                     renderRow={(item) =>
                     <ListItem>
                        <Card style={{flex: 1}}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={{uri: item.urlToImage}} />
                                <Body>
                                <Text>{item.title}</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem>
                            <Body>
                                <Image source={{uri: item.urlToImage}} style={{height: 200, width: '100%', flex: 1}}/>
                                <Text>
                                {item.description}
                                </Text>
                            </Body>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                            </CardItem>
                        </Card>
                     </ListItem>
                     }>
                  </List>
                
            </Content> 
        )
    }
}
 
export default Cnn;