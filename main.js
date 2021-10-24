const LinksSocialMedia = {
  github: 'sofiamasha',
  youtube: 'nobru',
  facebook: 'nobru',
  instagram: 'mah.gtx',
  twitter: 'masha_gtx'
}

function chancesSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia}`

    alert(li.children[0].href)
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.Bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
