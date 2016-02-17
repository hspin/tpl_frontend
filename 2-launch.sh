docker run --rm -p 9000:9000 -p 8001:8001 -p 3000:3000 -p 35729:35729 -v $(pwd)/htdocs:/home/deployer/code/ -it me_testing:latest /bin/bash

