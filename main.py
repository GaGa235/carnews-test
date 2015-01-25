#!/usr/bin/env python
# -*- coding: utf-8 -*-
import jinja2
import logging
import os
import webapp2


JINJA_ENVIRONMENT = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)


class Main(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/index.html')
    self.response.write(template.render(template_values))


class News(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/news.html')
    self.response.write(template.render(template_values))


application = webapp2.WSGIApplication([
  ('/', Main),
  ('/news', News),


], debug=True)
