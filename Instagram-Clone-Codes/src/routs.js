import Home from "./views/Home";
import Message from "./views/Message";
import Upload from "./views/Upload";
import Explore from "./views/Explore";
import Favorites from "./views/Favorites";
import Profile from "./views/Profile";
import Posts from "./ProfileOption/Posts";
import Saved from "./ProfileOption/Saved";
import Tagged from "./ProfileOption/Tagged";
import FooterText from "./views/FooterText";


export const routes = [
    {path : "" , component : Home},
    {path : "/message" , component : Message},
    {path : "/upload" , component : Upload},
    {path : "/explore" , components : {
        default : Explore,
        "FooterText" : FooterText
    }},
    {path : "/favorites" , component : Favorites},
    {path : "/posts" , components : {
        default : Profile,
        "ProfileOption" : Posts,
        "FooterText" : FooterText
    }},
    {path : "/saved" , components : {
        default : Profile,
        "ProfileOption" : Saved,
        "FooterText" : FooterText
    }},
    {path : "/tagged" , components : {
        default : Profile,
        "ProfileOption" : Tagged,
        "FooterText" : FooterText
    }},


]