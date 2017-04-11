/**
* Module for emitting Course Sharing Events.
*/
(function(define) {
    'use strict';

    define(['jquery', 'logger'], function($, Logger) {
        return function() {

            $('.course-actions .action-facebook').on('click', function(event) {
                var course_id = $(this).data('course-id');
                Logger.log('edx.course.sharing.share_clicked', {
                    course_id: course_id,
                    social_media_site: 'Facebook',
                    location: 'LMS Dashboard'
                });
                // TODO remove this when ready
                console.log(
                    'clicked fb!',
                    course_id,
                    'Facebook',
                    'LMS Dashboard'
                );
            });

            $('.course-actions .action-twitter').on('click', function(event) {
                var course_id = $(this).data('course-id');
                Logger.log('edx.course.sharing.share_clicked', {
                    course_id: course_id,
                    social_media_site: 'Twitter',
                    location: 'LMS Dashboard'
                });
                // TODO remove this when ready
                console.log(
                    'clicked twitter!',
                    course_id,
                    'Facebook',
                    'LMS Dashboard'
                );
            });
        };
    });
}).call(this, define || RequireJS.define);
