lock '3.4.0'

set :application, 'exampleapp'
# set :repo_url, 'git@bitbucket.org:hsd/cli_webapp-vid.git'
# set :deploy_to, '/srv/www/webapp-vid'
# set :keep_releases, 2
# set :linked_dirs, %w{node_modules}

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 1 do
      execute :touch, '/home/dkr/restart.txt'
    end
  end

end
