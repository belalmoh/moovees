import React, { useEffect } from 'react';
import { Row, Col, Card, Select, Empty } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;
const { Meta } = Card;

function Movies(props) {

    function handleScroll() {
        const scrollTop = (document.documentElement
          && document.documentElement.scrollTop)
          || document.body.scrollTop;
        const scrollHeight = (document.documentElement
          && document.documentElement.scrollHeight)
          || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 350 >= scrollHeight){
          props.setIsBottom(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(() => {
        if(props.isBottom){
            props.getMoreMovies(props.selectedGenre, props.currentPage+1);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isBottom, props.currentPage]);

    useEffect(() => {
        props.setIsBottom(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.movies, props.isBottom])

    const options = [];
    
    for (let i = 0; i < props.genres.length; i++) {
        options.push(<Option key={props.genres[i].id} value={props.genres[i].id}>{props.genres[i].name}</Option>);
    }

    function onChange(value) {
        props.getMovies(value);
        props.setGenre(value);
    }

    function onMovieClick(movieId){
        props.selectMovie(movieId);
    }

    function listAllMovies () {
        if(props.movies.length > 0){
            return (<Row justify="space-around">{
                props.movies.map((movie) => {
                    return (
                        <Col span={6} key={movie.id}>
                            <Link to={`/movie/${movie.id}`} onClick={() =>onMovieClick(movie.id)}>
                                <Card hoverable style={{ margin: '50px' }}
                                    cover={<img alt="example" src={`${props.imagesPath}${movie.poster_path}`} />}>
                                    <Meta title={movie.title} description={movie.release_date} />
                                </Card>
                            </Link>
                        </Col>
                    )
                })   
            }</Row>)
        } else {
            return (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"No movies :( .. Please choose a genre "} style={{ height: '100%', color: "#002766" }}/> )
        }
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <Select
                        showSearch={true}
                        placeholder="Select a genre"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        defaultValue={props.selectedGenre}
                        showArrow={true}
                        style={{ width: '100%', marginBottom: '50px' }}
                    >
                        {options}   
                    </Select>
                </Col>
            </Row>            

            {listAllMovies()}
            
        </>
    )
}

export default Movies;