import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from 'prop-types';
import {
    Row
} from "./Row";
import Time from './time';
const FileContainer = [{
        Icon: "FILE",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "File",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2020-07-3 08:03:52",
    },
    {
        Icon: "fiLe",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "file",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "file",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "file",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "file",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "folder",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
    {
        Icon: "file",
        Name: "File Name",
        Commit: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero odio exercitationem reprehenderit libero iste dicta quos ipsum voluptatibus voluptatum ad omnis veniam aliquid voluptates, est in. Exercitationem, ea voluptatum.`,
        Date: "2016-07-11 21:24:00",
    },
];

function Avatar({
    hast = '166916ca5140cd31d31b00a1049a9cea'
}) {
    var url = `https://www.gravatar.com/avatar/${hast}`;
    return ( <
        img src = {
            url
        }
        className = "avatar"
        alt = "avatar" / >
    )
}

function Message({
    text
}) {
    return ( <
        div className = "message" > {
            text
        } <
        /div>
    )
}

function NameWithHandle({
    author
}) {
    const {
        name,
        handle
    } = author;
    return ( <
        span className = "name-with-handle" >
        <
        span className = "name" > {
            name
        } < /span> <
        span className = "handle" > @ {
            handle
        } < /span> <
        /span>
    );
}
NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}
// const Time = ({ time }) => {
//   const timeString = moment(time).fromNow();
//   return (
//     <span className="time"> {timeString}</span>
//   );
// };
const ReplyButton = ({
        count
    }) => ( <
        a href = "https://www.twitter.com" >
        <
        span className = "reply-button" >
        <
        i className = " fa fa-reply reply-button" / > {
            count > 0 &&
            <
            span > {
                count
            } <
            /span>} <
            /span> <
            /a>

        );
        const RetweetButton = ({
            count
        }) => ( <
            span className = "retweet-button" >
            <
            i className = "fa fa-retweet" / > {
                getRetweetCount(count)
            } <
            /span>
        ); RetweetButton.propTypes = {
            count: PropTypes.number
        };
        const LikeButton = ({
                count
            }) => ( <
                span className = "like-button" >
                <
                i className = "fa fa-heart" / > {
                    count > 0 &&
                    <
                    span className = "like-count" > {
                        count
                    } <
                    /span>} <
                    /span>
                ); LikeButton.propTypes = {
                    count: PropTypes.number
                };
                const MoreOptionsButton = () => ( <
                    i className = "fa fa-ellipsis-h more-options-button" / >
                );


                function Tweet({
                    tweet
                }) {
                    return (
                        [ < div className = "tweet" >
                            <
                            Avatar hash = {
                                tweet.gravatar
                            }
                            /> <
                            div className = "content" >
                            <
                            NameWithHandle author = {
                                tweet.author
                            }
                            /> <
                            Time time = {
                                tweet.timestamp
                            }
                            /> <
                            Message text = {
                                tweet.message
                            }
                            /> <
                            div className = "buttons" >
                            <
                            ReplyButton count = {
                                tweet.reply
                            }
                            /> <
                            RetweetButton count = {
                                tweet.retweets
                            }
                            /> <
                            LikeButton count = {
                                tweet.likes
                            }
                            /> <
                            MoreOptionsButton / >
                            <
                            /div> <
                            /div> <
                            /div>
                        ]
                    );
                }

                var testTweet = {
                    message: "Something about cats that love singing every day",
                    gravatar: "xyz",
                    author: {
                        handle: "catperson",
                        name: "IAMA Cat Person"
                    },
                    reply: 10,
                    likes: 2000000,
                    retweets: 100000000,
                    timestamp: "2016-07-30 21:24:37"
                };

                function getRetweetCount(count) {
                    if (count > 0) {
                        return ( <
                            span className = "retweet-count" > {
                                count
                            } <
                            /span>
                        );
                    } else {
                        return null;
                    }
                }


                function App({
                    FileContainer,
                    Tweet
                }) {
                    let displayer = FileContainer.map((InfoArray) => {
                        return ( <
                            Row InfoArray = {
                                InfoArray
                            }
                            />
                        );
                    });
                    return <div className = "container" > {
                        displayer
                    } < /div>
                }



                App.propTypes = {
                    FileContainer: PropTypes.object.isRequired
                }
                ReactDOM.render(
                    [ <
                        App FileContainer = {
                            FileContainer
                        }
                        />, <
                        Tweet tweet = {
                            testTweet
                        }
                        />
                    ], document.getElementById("root"));