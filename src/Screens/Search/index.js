
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem,Input ,Item, Thumbnail, Button, Icon, Body, Left, List, ListItem} from 'native-base'
import {getSearch} from '../../Api/request'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            text: ""
         }
    }
  handleSearch= () => {
      const {text} = this.state
    getSearch(text)
    .then( res => this.setState({data: res.articles}))
  }
    render() { 
        const {text} = this.state
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" value={text} onChangeText={text => this.setState({text})} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent onPress={()=> this.handleSearch()}>
                        <Text>Search</Text>
                    </Button>
                </Header>
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
            </Container>
             
        )
    }
}
 
export default Search;