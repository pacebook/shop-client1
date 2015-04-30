angular.module('radio.controller')

    .controller('IssueListCtrl', function($scope, Channel, $state, $location, $log, 
        $ionicHistory) {

        $scope.issue_list = {};
        $scope.issue_list.isTagView = false;
        $scope.issue_list.currentTag = {}

        var page = 1;
        var url_pattern = '';
        var tag = $location.search().tag || undefined;
        var channel = $location.search().channel || undefined;
        var params = {
            'params': {
                'page':page,
                'tag':tag,
                'channel':channel
            }
        };

        $log.log('Ionic History View !!!', $ionicHistory.viewHistory());

        params.params.tag == undefined ? delete params.params.tag : undefined; 
        params.params.channel == undefined ? delete params.params.channel : undefined;

        Channel.getIssues(params).then(function(data) {
            $log.log("Issut List!!", data.results);
            if (data.results.length) {
                for(var i in data.results[0].hash_tags) {
                    if (data.results[0].hash_tags[i].id == tag) {
                        $scope.issue_list.currentTag = data.results[0].hash_tags[i];
                    }
                }
                $scope.issue_list.issues = data.results;
            }
        })
        
        url_pattern = /\/\#\/main\/|\/\#\/channel\/|\/#\/private\/|\/#\/search\//.exec($location.absUrl())[0];
        /*
        $scope.channel_detail.goHashTagSpecific = function($event, channel, tag) {
            $event.stopPropagation();
            switch(url_pattern) {
                case '/#/main/':
                    $location.url('/main/specific/hashtag/issues?tag='+tag.id+'&channel='+channel.id);
                    break; 
                case '/#/channel/':
                    $location.url('/channel/specific/hashtag/issues?tag='+tag.id+'&channel='+channel.id);
                    break;
                case '/#/private/':
                    $location.url('/private/specific/hashtag/issues?tag='+tag.id+'&channel='+channel.id);
                    break;
                case '/#/search/':
                    $location.url('/search/specific/hashtag/issues?tag='+tag.id+'&channel='+channel.id);
                    break;
            }
        }
        */


        $scope.issue_list.goIssueDetail = function(issue_id) {
            switch(url_pattern) {
                case '/#/main/':
                    $location.url('/main/issues/'+issue_id);
                    break; 
                case '/#/channel/':
                    $location.url('/channel/issues/'+issue_id);
                    break;
                case '/#/private/':
                    $location.url('/private/issues/'+issue_id);
                    break;
                case '/#/search/':
                    $location.url('/search/issues/'+issue_id);
                    break;
            }
        }

        $scope.issue_list.goHashTagGlobal = function(tag, $event) {
            $event.stopPropagation();
            switch(url_pattern) {
                case '/#/main/':
                    $location.url('/main/hashtag/issues?tag='+tag.id);
                    break; 
                case '/#/channel/':
                    $location.url('/channel/hashtag/issues?tag='+tag.id);
                    break;
                case '/#/private/':
                    $location.url('/private/hashtag/issues?tag='+tag.id);
                    break;
                case '/#/search/':
                    $location.url('/search/hashtag/issues?tag='+tag.id);
                    break;
            }
        }
    });