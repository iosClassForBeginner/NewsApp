
import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Body, Left, List, ListItem} from 'native-base'
import {getCnnNews} from '../../Api/request'
import _ from 'lodash'

class Cnn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: []
         }
    }
    componentWillMount() {
        console.log('fasfasfasffasfasf=>>>>>>>>>>>')
        getCnnNews()
        .then(res=> this.setState({datas: res.articles}))
    }
    _keyExtractor = (item, index) => item.id;
    render() { 
        if (_.isEmpty(this.state.datas)) {
            return <Text>Nothings</Text>
        }
        return (
            <Container>
                <Content>
                <FlatList
                    data={this.state.datas}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) =>
                        <ListItem key={item.title}>
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
                    </FlatList>
                </Content> 
            </Container>
        )
    }
}
 
export default Cnn;