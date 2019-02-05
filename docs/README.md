TST Boston Homepage
===================

Site created with [Jekyll](jekyllrb.com) and hosted on github pages.

By TST Boston Chapter, 2018-2019.


## Setup
Ok, I used Jekyll so hopefully in order to edit the content of the site you just need to change some text files (markdown, technically), and deploy Jekyll. I know there are some techy people in the chapter, so this should be a piece of cake. Get Matt to help you if it isn't.

To install Jekyll, you need Ruby. To install Ruby, you are going to need to be on mac or linux. You can also use the windows linux subsystem. I tried it, and it works fine.

- Install Ruby however you install Ruby on your OS. For instance `sudo apt-get install ruby` on linux. Google 'install ruby' on mac. I dunno.
- Install git: `sudo apt-get install git` on linux.
- Clone this repo: `git clone git@github.com:tstboston/tstboston-homepage.git`. Note that you will need to be given access to the repo (or just use the tstboston github account)
- Install Jekyll (and any other gems this site might use): `bundle install`

## Make Changes
If you just want to make changes to the content of the site, but not the form, all of the text is stored in markdown or yaml files. Look around in the `_includes` and `_data` directories. For instance, if you want to change or add a question to the FAQ, edit the `_data/faq.yml` file. The format should be pretty self explanitory.

## Test it locally
Run `jekyll serve`. This will start the local Jekyll server. Now open up your web browser and go to `localhost:4000`. It will automatically rebuild the site when you make changes which is pretty cool.

## Deploy
If you are happy with you changes run `jekyll build` to compile a web-ready version of the site. Commit your changes to git, and push them up! Now github pages will serve your updated version of the site. Hooray!

## Holy Hell This Is Complicated. Why Did You Decide To Do This With Jekyll?
- Wordpress and other CMSes like Square Space have argueably higher learning curves than all of this CLI garbage, and the skills are less transferable.
- CMSes also tend to have WAY more features than we'd want. It's like communiting to work in an Abrahams tank.
- Making the site in Jekyll and hosting it on github pages doesn't cost any money :D
