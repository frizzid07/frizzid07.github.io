import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "../../css/Projects.css";
import Button from "../components/Button";
import Loading from "./Loading";
import { projects, socialMediaLinks } from "../Portfolio";


export default function Projects() {
  const RepoCard = lazy(() => import('../components/RepoCard'));
  const FailedLoading = () => null ;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    function getRepoData() {
        const client = new ApolloClient({
          uri: "https://api.github.com/graphql",
          request: (operation) => {
            operation.setContext({
              headers: {
                authorization: `Bearer ${projects.githubConvertedToken}`,
              },
            });
          },
        });
    
        client
          .query({
            query: gql`
            {
            user(login: "${projects.githubUserName}") {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
            `,
          })
          .then((result) => {
            setrepoFunction(result.data.user.pinnedItems.edges);
            console.log(result);
          })
          .catch(function (error) {
            console.log(error);
            setrepoFunction("Error");
            console.log("Because of this Error, nothing is shown in place of Projects section. Projects section not configured");
          });
      }
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (!(typeof repo === 'string' || repo instanceof String)){
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="projects">
        <h1 className="project-title">Academic &amp; Professional Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            return <RepoCard repo={v} key={v.node.id} />;
          })}
        </div>
        <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
      </div>
    </Suspense>
  );
} else{
    return(<FailedLoading />);
  }
}