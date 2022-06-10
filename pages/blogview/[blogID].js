import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();
  //console.log(router)
  const { blogID } = router.query;
  const [film, setFilm] = useState(null);
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   try {
  //     axios
  //       .get(`https://newsapi.org/v2/everything?i=${blogID}&from=2022-05-09&sortBy=publishedAt&apiKey=b7fd46710e0144d6bc5178d1b35b0016`)
  //     //.get(`http://127.0.0.1:3000/showingid?imdbID=${imdbID}`)
  //       .then((response) => {
  //         let result = JSON.parse(JSON.stringify(response));
  //         let { data } = result;
  //         setFilm(data);
  //       });
  //   }catch (err) {
  //     console.log(err);
  //   }
  // }, [router.isReady]);
  //if (!film) return <div className="loading">Loading...</div>;

  return (
    <>
    <div className="blogdiv">
    <h2 className="blog-title">DESIGN FOR MANKIND</h2>
      <img className="blogimage" src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="/>
      <div className="discription">
      <b>What It Is:</b> A lifestyle blog by Erin Loechner, filled with beautifully-written essays on everything from design
       she’s a pro to parenting to marriage to work to travel and more.
      </div>
      <div className="blogcontent">
      <b>Why I Love It:</b>I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life inspiration
      and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage have always been some of my favorites.
      But I have always especially connected with her posts on work, and creativity, and self-care, probably because they’re always words I need
      to take to heart myself.  I also really admire how brave and open she has been to letting her career evolve/change in some big ways over the 
      past decade, and I can’t wait to follow along wherever the next roads may lead.
      </div>
      <div className="blogrecomendation">
      <b>Recommendations:</b> Every single post in her Life archives.  All of the links at the bottom of this post. 
      The Live FashionABLE scarf that she designed.
      </div>
    </div>
    </>
  );
};

export default Post;