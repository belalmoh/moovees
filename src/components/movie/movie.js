import React, { useEffect } from 'react';
import { Row, Col, Image, Typography, Divider, List, Avatar } from 'antd';

import { useParams } from 'react-router-dom';

const { Title, Text } = Typography;

function Movie(props) {

    let { movieId } = useParams();
    
    useEffect(() => {
        props.selectMovie(movieId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8}>
                <Image
                    src={`${props.imagesPath}${props.movie.poster_path}`}
                />
            </Col>
            
            <Col span={12}>
                <Title>{props.movie.title}</Title>
                <Title level={4}>{props.movie.release_date}</Title>
                
                <Divider/>

                <List
                    size="large"
                    header={<Text strong>Movie Genres</Text>}
                    bordered
                    dataSource={props.movie.genres}
                    renderItem={item => <List.Item key={item.id}>{item.name}</List.Item>}
                />

                <Divider/>

                <Text>{props.movie.overview}</Text>

                <Divider/>

                <List
                    size="large"
                    header={<Text strong>Production Companies</Text>}
                    bordered
                    dataSource={props.movie.production_companies}
                    renderItem={item => {
                        let logoPath = item.logo_path ? props.imagesPath + item.logo_path : '';
                        return (
                            <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={`${logoPath}`} />}
                                title={item.name}
                            />
                            </List.Item>
                        )}
                    }
                />

            </Col>
        </Row>
    )
}

export default Movie;