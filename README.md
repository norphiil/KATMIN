<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/lenra-io/template-hello-world-node12">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Lenra Template Node12</h3>

  <p align="center">
    This template repository provides an hello world example of a Lenra app to get you started building your own.
    <br />
    <br />
    <!-- <a href="https://github.com/lenra-io/template-hello-world-node12">View Demo</a>
    · -->
    <a href="https://github.com/lenra-io/template-hello-world-node12/issues">Report Bug</a>
    ·
    <a href="https://github.com/lenra-io/template-hello-world-node12/issues">Request Feature</a>
  </p>
</div>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You need to install the following : 
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to clone the project
- [Docker](https://docs.docker.com/get-docker/) to start the devtools
- [nodejs](https://nodejs.org/es/)
- Your favorite IDE

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup your project
1. Create your project using this template
2. Clone your project
```bash
    git clone https://github.com/username/project.git
```
3. Run the devtools
```bash
    docker run -it --rm -p 4000:4000 -v ${PWD}:/home/app/function lenra/devtools-node12:beta
```
4. Open http://localhost:4000
5. Enjoy your local development !

<p align="right">(<a href="#top">back to top</a>)</p>

### Deploy your project on Lenra
1. Register or login into your dev account on https://dev.lenra.io
2. Create a new project
3. Provide a **DIRECT** link to your git repository. [More about this](#direct-repository-url)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Troubleshooting

### Direct repository url
This url is basically the same you use to clone your project via HTTPS.
Make sure your url follow these rules : 
- The url must start with `http(s)` url and end with `.git`. 
- Your url must allow us to clone your project without credentials. This means that if your project is private, you must [provide credentials into the url](#create-a-github-url-with-credentials). 
```
https://github.com/username/project.git
```

### Create a github url with credentials

The safest way to do that is by creating a [personnal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
Your url can now use this token : 
```
https://username:access_token@github.com/username/repo_name.git
```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue with the tag "enhancement" or "bug".
Don't forget to give the project a star! Thanks again!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the **MIT** License. See [LICENSE](./LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Lenra - [@lenra_dev](https://twitter.com/lenra_dev) - contact@lenra.io

Project Link: [https://github.com/lenra-io/template-hello-world-node12](https://github.com/lenra-io/template-hello-world-node12)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lenra-io/template-hello-world-node12.svg?style=for-the-badge
[contributors-url]: https://github.com/lenra-io/template-hello-world-node12/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lenra-io/template-hello-world-node12.svg?style=for-the-badge
[forks-url]: https://github.com/lenra-io/template-hello-world-node12/network/members
[stars-shield]: https://img.shields.io/github/stars/lenra-io/template-hello-world-node12.svg?style=for-the-badge
[stars-url]: https://github.com/lenra-io/template-hello-world-node12/stargazers
[issues-shield]: https://img.shields.io/github/issues/lenra-io/template-hello-world-node12.svg?style=for-the-badge
[issues-url]: https://github.com/lenra-io/template-hello-world-node12/issues
[license-shield]: https://img.shields.io/github/license/lenra-io/template-hello-world-node12.svg?style=for-the-badge
[license-url]: https://github.com/lenra-io/template-hello-world-node12/blob/master/LICENSE.txt
